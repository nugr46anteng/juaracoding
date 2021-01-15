function matrix() {
    var a = parseInt(document.getElementById("matrix1").value);
    var b = parseInt(document.getElementById("matrix2").value);
  
    document.getElementById("output").value = tambah(a, b);
  }
  
  function hitungMatrix() {
    document.getElementById("output").value =
      parseInt(document.getElementById("matrix1").value) +
      parseInt(document.getElementById("matrix2").value);
  }