export function expensiveFn() {
  let computationResult = 0;
  for (let i = 0; i < 1e8; i++) {
    for (let j = 0; j < 1e2 / 4; j++) {
      computationResult += 1;
    }
  }
  return computationResult;
}

export const BIG_NUMBER = 1e5 * 4;
