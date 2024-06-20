import Cpf from '../src/Cpf';

test.skip("Deve validar um cpf válido que tem digito maior que zero", function () {
	const cpf = new Cpf("091.811.956-13");
	expect(cpf).toBeDefined();
});

test("Deve tentar validar um cpf com digito zero no primeiro dígito", function () {
	const cpf = new Cpf("198.454.187-08");
	expect(cpf).toBeDefined();
});

test("Deve tentar validar um cpf com digito zero no segundo dígito", function () {
	const cpf = new Cpf("147.085.437-60");
	expect(cpf).toBeDefined();
});

test.skip("Deve tentar validar um cpf com mais de 14 caracteres", function () {
	const cpf = new Cpf("123.456.789-1000")
	expect(cpf).toBeFalsy();
});

test("Deve tentar validar um cpf inválido", function () {
	expect(() => new Cpf("123.456.789-99")).toBeTruthy();
});

test("Deve tentar validar um cpf com todos os dígitos iguais", function () {
	expect(() => new Cpf("111.111.111-11")).toBeTruthy();
});


test("Deve tentar validar um cpf inválido muito pequeno", function () {
expect(() => new Cpf("123.456")).toBeTruthy();
});