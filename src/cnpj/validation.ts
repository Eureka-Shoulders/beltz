export function validateCNPJ(cnpjReceveid: string | number) {
  const cnpj = String(cnpjReceveid).replace(/[&/\\#,+()$~%.'":*?<>{}-]/g, '');

  const cnpjArray = cnpj
    .replace(/[^\d]+/g, '')
    .trim()
    .split('')
    .map((char: any) => Number(char));

  let v1 = 0;
  let v2 = 0;
  let aux = false;

  cnpjArray.map((char: number, index: number, arr: number[]) => {
    if (arr[index - 1] !== char) {
      aux = true;
    }
    return null;
  });

  if (!aux) {
    return false;
  } else {
    for (
      let index = 0, p1 = 5, p2 = 13;
      cnpj.length - 2 > index;
      index++, p1--, p2--
    ) {
      if (p1 >= 2) {
        v1 += cnpjArray[index] * p1;
      } else {
        v1 += cnpjArray[index] * p2;
      }
    }

    v1 = v1 % 11;

    if (v1 < 2) {
      v1 = 0;
    } else {
      v1 = 11 - v1;
    }

    if (v1 !== cnpjArray[12]) {
      return false;
    }

    for (let i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
      if (p1 >= 2) {
        v2 += cnpjArray[i] * p1;
      } else {
        v2 += cnpjArray[i] * p2;
      }
    }

    v2 = v2 % 11;

    if (v2 < 2) {
      v2 = 0;
    } else {
      v2 = 11 - v2;
    }

    if (v2 !== cnpjArray[13]) {
      return false;
    } else {
      return true;
    }
  }
}
