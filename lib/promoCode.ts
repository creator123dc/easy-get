import supabase from './supabase';

export interface PromoCode {
  code: string;
  discount: number;
  employee_name: string;
  total_uses: number;
  max_uses: number;
  active?: boolean;
}

export interface PromoCodeValidationResult {
  valid: boolean;
  promoCode?: PromoCode;
  error?: string;
}

/**
 * Validate a promo code by checking if it exists
 */
export async function validatePromoCode(code: string): Promise<PromoCodeValidationResult> {
  try {
    console.log('User input promo code:', code);

    if (!code || code.trim() === '') {
      return {
        valid: false,
        error: 'Please enter a promo code'
      };
    }

    const normalizedCode = code.trim();
    console.log('Normalized promo code:', normalizedCode);

    // Fetch promo code from Supabase
    const { data, error } = await supabase
      .from('promo_codes')
      .select('*')
      .ilike('code', normalizedCode);

    console.log('Supabase response:', { data, error });

    if (error) {
      console.error('Error fetching promo code:', error);
      return {
        valid: false,
        error: 'Failed to validate promo code. Please try again.'
      };
    }

    if (data && data.length > 0) {
      const promoCode = data[0];
      return {
        valid: true,
        promoCode: promoCode as PromoCode
      };
    }

    console.log('No promo code found for:', normalizedCode);
    return {
      valid: false,
      error: 'Invalid promo code'
    };
  } catch (error) {
    console.error('Error validating promo code:', error);
    return {
      valid: false,
      error: 'An unexpected error occurred. Please try again.'
    };
  }
}

/**
 * Apply promo code discount to total price
 */
export function applyPromoCodeDiscount(totalPrice: number, discount: number): number {
  const discountedPrice = totalPrice - discount;
  return Math.max(0, discountedPrice); // Ensure price doesn't go below 0
}

/**
 * Update promo code usage count after successful order
 */
export async function updatePromoCodeUsage(code: string): Promise<boolean> {
  try {
    const normalizedCode = code.trim();

    // First, get current usage count using case-insensitive match
    const { data: currentData, error: fetchError } = await supabase
      .from('promo_codes')
      .select('total_uses, max_uses')
      .ilike('code', normalizedCode)
      .single();

    if (fetchError || !currentData) {
      console.error('Error fetching current promo code usage:', fetchError);
      return false;
    }

    // Check if we can still use this code
    if (currentData.total_uses >= currentData.max_uses) {
      console.log('Promo code has reached max uses:', normalizedCode);
      return false;
    }

    // Increment usage count using case-insensitive match
    const { error: updateError } = await supabase
      .from('promo_codes')
      .update({ total_uses: currentData.total_uses + 1 })
      .ilike('code', normalizedCode);

    if (updateError) {
      console.error('Error updating promo code usage:', updateError);
      return false;
    }

    console.log('Promo code usage updated successfully:', normalizedCode);
    return true;
  } catch (error) {
    console.error('Error updating promo code usage:', error);
    return false;
  }
}

/**
 * Format promo code for display
 */
export function formatPromoCode(code: string): string {
  return code.toUpperCase();
}

/**
 * Test function: Fetch all promo codes from Supabase
 */
export async function testFetchAllPromoCodes() {
  try {
    const { data, error } = await supabase
      .from('promo_codes')
      .select('*');

    console.log('All promo codes from Supabase:', { data, error });
    return { data, error };
  } catch (error) {
    console.error('Error fetching all promo codes:', error);
    return { data: null, error };
  }
}
