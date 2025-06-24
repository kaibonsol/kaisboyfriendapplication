/**
 * Generates a BEM-style class string for a given block, element, and modifiers.
 *
 * @param block - The BEM block name
 * @param element - The BEM element name (optional)
 * @param modifiers - An object map of modifier names to boolean flags
 * @returns A space-separated string of BEM classes
 */
export function createBEMClasses(
  block: string,
  element?: string,
  modifiers: { [modifier: string]: boolean } = {}
): string {
  // Base class: block or block__element
  const baseClass = element ? `${block} ${block}__${element}` : block;

  // Start with the base class
  const classes: string[] = [baseClass];

  // Append modifier classes where value is truthy
  Object.entries(modifiers).forEach(([modifier, enabled]) => {
    if (enabled) {
      classes.push(`${baseClass}--${modifier}`);
    }
  });

  // Join into a space-separated string
  return classes.join(" ");
}
