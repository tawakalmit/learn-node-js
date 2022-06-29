// IF ELSE
let age = new Date().getFullYear() - 1992;
function ageValidator(){
	if (age < 13) {
	console.log("Anda belum baligh...", age);
	} else {
	console.log("Anda sudah baligh ....", age);
	}
}

// Operator Ternary
let nilaiUjian = 60;
let ucapan = nilaiUjian >= 75 ? "Selamat anda lulus" : "Silahkan coba lagi";
console.log(ucapan);

// SWITCH
let nilai=90;
switch (true) {
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




