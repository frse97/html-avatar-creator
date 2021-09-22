/**
 * Transforms a specific number to rem size
 * @param size The size in px that needs to be transformed
 * @returns The transformed rem size
 */
export const toRem = (size?: number): string | undefined => {
  if (size) {
    const remSize = size * 0.0625;
    return `${remSize}rem`;
  }
};
