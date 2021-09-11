import { getCategories } from './categorydata';
import { getTerms } from './data';

const viewAllCards = async () => {
  const categories = await getCategories();
  const terms = await getTerms();
  return [categories, terms];
};

export default viewAllCards;
