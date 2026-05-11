function rot13(str) {
  return str.replace(/[A-Z]/g, (letra) => {
    let codigoASCII = letra.charCodeAt(0);
    
    if (codigoASCII < 78) {
      return String.fromCharCode(codigoASCII + 13);
    } else {
      return String.fromCharCode(codigoASCII - 13);
    }
  });
  return str;
}
