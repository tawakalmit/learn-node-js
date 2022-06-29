let age = new Date().getFullYear() - 1992;

if (age < 18) {
	console.log("anda belum berhak membeli ini...", age);
} else {
	console.log("Anda tetap belum berhak membeli ini ....", age);
}

let nilai = 90;

function cekNilai(nilai){
	if (nilai < 50){
		console.log("anda tidak lulus");
	} else if (nilai < 65 ) {
		console.log("anda mendapatkan nilai pas");
	} else if (nilai < 85) {
		console.log("anda mendapatkan nilai cukup");
	} else {
		console.log ("anda mendapatkan nilai bagus");
	}
}

switch (nilai) {
	case "A":
		console.log("Anda lulus dengan baik");
		break;
	case "B":
	case "C":
		console.log("Anda Lulus");
		break;
	case "D":
		console.log("Anda tidak lulus");
		break;
	default:
		console.log("Anda mungkin salah jurusan");
}
