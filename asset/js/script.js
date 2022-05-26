function penjumlahan(){
    var angka1=parseFloat(document.calculator.inputsatu.value);
    var angka2=parseFloat(document.calculator.inputdua.value);
    var hasil= angka1+angka2;
    document.calculator.hasil.value=hasil;
    }

    function pengurangan(){
    var angka1=parseFloat(document.calculator.inputsatu.value);
    var angka2=parseFloat(document.calculator.inputdua.value);
    var hasil= angka1-angka2;
    document.calculator.hasil.value=hasil;
    }

    function perkalian(){
    var angka1=parseFloat(document.calculator.inputsatu.value);
    var angka2=parseFloat(document.calculator.inputdua.value);
    var hasil= angka1*angka2;
    document.calculator.hasil.value=hasil;
    }

    function pembagian(){
    var angka1=parseFloat(document.calculator.inputsatu.value);
    var angka2=parseFloat(document.calculator.inputdua.value);
    var hasil= angka1/angka2;
    document.calculator.hasil.value=hasil;
    }

    function perpangkatan(){
        var angka1=parseFloat(document.calculator.inputsatu.value);
        var angka2=parseFloat(document.calculator.inputdua.value);
        var hasil= Math.pow(angka1, angka2);
        document.calculator.hasil.value=hasil;
        }