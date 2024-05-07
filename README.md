var regExpNome = /^[A-Za-z\s]+$/.test(nome);
Permite de A-Z maiusculo e minusculo, $ define o final da palavra.

var regExpEmail = /\S+@\S+\.\S+/.test(email);
Permite caracteres e numeros antes e depois do @ e tambem depois do .

var regExpTelefone = /\([0-9]{2}\) [0-9]{5}-[0-9]{4}/.test(telefone);
Cria a necessidade de parenteses() e espaço após eles, permite de 0-9 e cria a necessidade de hifen depois de 5 caracteres, após permite apenas mais 4 numeros.
