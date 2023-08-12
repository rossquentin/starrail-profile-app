import { hoveredStatName } from '../lib/stores';

/**
 * Connverts a promotion level to the maximum level achievable at that promotion.
 * @param promotion The promotion level.
 * @returns The maximum level achievable at that promotion.
 */
export function promotionToMaxLevel(promotion: number) {
	return 20 + promotion * 10;
}

export function onStatHover(prop: StarRail.Property) {
	hoveredStatName.set(prop.name);
}

export function onStatHoverEnd() {
	hoveredStatName.set('');
}

/**
 * Converts a digit from 1 to 5 to a roman numeral.
 * @param digit The digit to convert.
 * @returns The roman numeral.
 */
export function digitToRoman(digit: number) {
	switch (digit) {
		case 1:
			return 'I';
		case 2:
			return 'II';
		case 3:
			return 'III';
		case 4:
			return 'IV';
		case 5:
			return 'V';
		default:
			return '';
	}
}
