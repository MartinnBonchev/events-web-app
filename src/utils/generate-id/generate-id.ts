export default function generateId() {
  return Number((Date.now() + Math.random()).toFixed(0));
}
