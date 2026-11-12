import { Product } from '../types/product';
import { Category } from '../types/category';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { MAIN_CATEGORIES } from '../constants/categories';

export interface ICatalogService {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategory(categorySlug: string): Promise<Product[]>;
  getFeaturedSarees(): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  searchProducts(query: string): Promise<Product[]>;
}

/**
 * Static Implementation for Phase 1
 * When transitioning to a production database/API in Phase 2,
 * swap this class with ApiCatalogService without changing any UI components.
 */
export class StaticCatalogService implements ICatalogService {
  async getAllProducts(): Promise<Product[]> {
    return MOCK_PRODUCTS;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    return product || null;
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.category === categorySlug);
  }

  async getFeaturedSarees(): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.category === 'sarees');
  }

  async getCategories(): Promise<Category[]> {
    return MAIN_CATEGORIES;
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    const category = MAIN_CATEGORIES.find((c) => c.slug === slug);
    return category || null;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }
}

export const catalogService = new StaticCatalogService();
