export interface ReviewSection {
  heading: string;
  content: string;
}

export interface Review {
  id: string;
  title: string;
  subtitle: string;
  game: string;
  author: string;
  datePublished: string;
  dateLastUpdated: string;
  score: number;
  sections: ReviewSection[];
}

export const emptyReview = (): Review => ({
  id: '',
  title: '',
  subtitle: '',
  game: '',
  author: '',
  datePublished: '',
  dateLastUpdated: '',
  score: 0,
  sections: [],
});
