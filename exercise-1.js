const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

const students = Array.from(xmlDoc.querySelectorAll('student'));
const jsObject = {
  list: []
};

students.forEach(student => {
  const studentObj = {};
  student.querySelectorAll('*').forEach(node => {
    switch (node.tagName) {
      case 'first':
      case 'second':
        studentObj.name = node.textContent;
        break;
      case 'age':
        studentObj.age = parseInt(node.textContent, 10);
        break;
      case 'prof':
        studentObj.prof = node.textContent;
        break;
      case 'name':
        studentObj.lang = node.getAttribute('lang');
        break;
    }
  });
  jsObject.list.push(studentObj);
});

console.log(jsObject);