import { Item, Difficulty } from "@/types";
import { MARKET_DATA } from "@/data/market-data";

/**
 * Get a random item from the dataset
 * @param difficulty - Optional difficulty filter (1-5)
 * @returns Random Item
 */
export function getRandomItem(difficulty?: Difficulty): Item {
  const filteredItems = difficulty
    ? MARKET_DATA.filter((item) => item.difficulty === difficulty)
    : MARKET_DATA;

  if (filteredItems.length === 0) {
    // Fallback to all items if no items match the difficulty
    const randomIndex = Math.floor(Math.random() * MARKET_DATA.length);
    return MARKET_DATA[randomIndex];
  }

  const randomIndex = Math.floor(Math.random() * filteredItems.length);
  return filteredItems[randomIndex];
}

/**
 * Get all items by difficulty level
 * @param difficulty - Difficulty level (1-5)
 * @returns Array of Items
 */
export function getItemsByDifficulty(difficulty: Difficulty): Item[] {
  return MARKET_DATA.filter((item) => item.difficulty === difficulty);
}

/**
 * Format price in Nepali Rupees
 * @param price - Price number
 * @returns Formatted string
 */
export function formatPrice(price: number): string {
  return `NPR ${price.toLocaleString("en-NP")}`;
}

/**
 * Get random number from range
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number within range
 */
export function randomFromRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculate actual price for an item (random within current price range)
 * @param item - Item object
 * @returns Actual price
 */
export function getActualPrice(item: Item): number {
  const [min, max] = item.priceRange.current;
  return randomFromRange(min, max);
}

/**
 * Calculate score based on guess accuracy
 * @param actualPrice - Actual price
 * @param guessedPrice - User's guessed price
 * @returns Points earned (0-1000)
 */
export function calculateScore(
  actualPrice: number,
  guessedPrice: number
): number {
  const difference = Math.abs(actualPrice - guessedPrice);
  const percentageError = (difference / actualPrice) * 100;

  // Perfect guess: 1000 points
  if (difference === 0) return 1000;

  // Within 5%: 800-900 points
  if (percentageError <= 5) return Math.floor(900 - percentageError * 20);

  // Within 10%: 600-800 points
  if (percentageError <= 10) return Math.floor(800 - percentageError * 20);

  // Within 20%: 400-600 points
  if (percentageError <= 20) return Math.floor(600 - percentageError * 10);

  // Within 30%: 200-400 points
  if (percentageError <= 30) return Math.floor(400 - percentageError * 6.67);

  // Within 50%: 100-200 points
  if (percentageError <= 50) return Math.floor(200 - percentageError * 2);

  // More than 50% off: 0-100 points
  if (percentageError <= 100) return Math.floor(100 - percentageError);

  // Way off: 0 points
  return 0;
}

/**
 * Get difficulty label
 * @param difficulty - Difficulty number (1-5)
 * @returns Difficulty label
 */
export function getDifficultyLabel(difficulty: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    1: "Very Easy",
    2: "Easy",
    3: "Medium",
    4: "Hard",
    5: "Very Hard",
  };
  return labels[difficulty];
}

/**
 * Get category emoji
 * @param category - Category string
 * @returns Emoji representing category
 */
export function getCategoryEmoji(category: string): string {
  const emojis: Record<string, string> = {
    grocery: "🛒",
    food: "🍽️",
    transport: "🚗",
    home: "🏠",
    services: "💼",
    health: "💪",
    stationery: "📝",
  };
  return emojis[category] || "📦";
}

/**
 * Shuffle array
 * @param array - Array to shuffle
 * @returns Shuffled array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
