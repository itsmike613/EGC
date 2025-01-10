document.getElementById('gradeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const quarterOne = parseFloat(document.getElementById('quarteroneinput').value);
    const quarterTwo = parseFloat(document.getElementById('quartertwoinput').value);
    const wantedGrade = parseFloat(document.getElementById('wantedgradeinput').value);
    const examGrade = (wantedGrade - (0.40 * quarterOne) - (0.40 * quarterTwo)) / 0.20;
    document.getElementById('wantedgrade').textContent = wantedGrade.toFixed(3);
    document.getElementById('finalexamgrade').textContent = examGrade.toFixed(3);
    const equationText = `(0.40(${quarterOne}) + 0.40(${quarterTwo}) + 0.20(E) = ${wantedGrade})`;
    document.getElementById('equation').textContent = equationText;
});