import { generateJsCode } from "./codeGenerator";

describe("Generate JavaScript Code", () => {
  const targetStringCode = `
    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  `;

  it("문자열 형식의 JS코드를 기반으로 함수 생성하며 실제 함수처럼 동작해야합니다.", () => {
    const targetFunc = generateJsCode(targetStringCode, "fibonacci");

    expect(targetFunc(1)).toBe(1);
    expect(targetFunc(5)).toBe(5);
    expect(targetFunc(10)).toBe(55);
  });
});
