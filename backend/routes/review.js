const pool = require("../dev/dbDetails");

// Create the relevent rows for a review
// Creates a review and sections rows and they return the reviewId
const createReview = (req, res, next) => {
  insertReview(req.body)
    .then((reviewId) => insertSections(req.body.sections, reviewId))
    .then((reviewId) => res.status(200).json({ reviewId }))
    .catch((error) => next(error));
};

// Create a review row
const insertReview = (body) => {
  return new Promise((resolve, reject) => {
    const subject = body.subject;
    const title = body.title;
    const subtitle = body.subtitle;
    const score = body.score;
    pool.query(
      "INSERT INTO review (subject, title, subtitle, score) VALUES ($1, $2, $3, $4) RETURNING review_id",
      [subject, title, subtitle, score],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows[0].review_id);
        }
      }
    );
  });
};

// Create a section row
const insertSections = (sections, reviewId) => {
  return new Promise((resolve, reject) => {
    if (sections === null || sections === undefined) {
      reject("Invalid sections provided");
    }

    // If there are no sections in the review just resolve
    if (sections.length === 0) {
      console.log("NO sections");
      resolve(reviewId);
    }

    sections.forEach((section, index) => {
      const heading = section.heading || null;
      const paragraph = section.paragraph || null;
      const imagePath = section.imagePath || null;
      const position = index;
      console.log({ reviewId, heading, paragraph, imagePath, position });
      pool.query(
        "INSERT INTO section (review_id, heading, paragraph, image_path, position) VALUES ($1, $2, $3, $4, $5)",
        [reviewId, heading, paragraph, imagePath, position],
        (error, results) => {
          if (error) reject(error);
        }
      );
    });

    resolve(reviewId);
  });
};

const getReview = (req, res, next) => {
  const reviewId = req.params.reviewId;
  if (!reviewId) {
    res.status(404).json({ error: "reviewId is undefined" });
    return next();
  }

  pool.query(
    "SELECT * FROM review WHERE review_id = $1",
    [reviewId],
    (error, results) => {
      if (error) next(error);
      res.status(200).json({ tierlists: results.rows });
    }
  );
};

module.exports = { createReview, getReview };
