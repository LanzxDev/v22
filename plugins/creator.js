let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || "").toLowerCase();
	let _type = (args[0] || "").toLowerCase();

	//------- NOMOR
	let nowner = `https://wa.me/${nomorown1.split`@`[0]}`;
	let teksnomor = `${htki} *Xwby* ${htka}
https://wa.me/${nomorown1.split`@`[0]}

${htki} *Vynaa* ${htka}
https://wa.me/6283896757956
`

	//------------ BIO
	let ppown = await conn
		.profilePictureUrl(nomorown + "@s.whatsapp.net", "image")
	let teksbio = `${htki} *BIODATA* ${htka}
• Nama : Xwby
• Gender : Laki 
• Tanggal lahir : 02 April
• Umur : Ga Sampe 30
• Hobby : Ngegame,Coding
• Sifat : Nilai Aja Kalau Udah Kenal
• Tinggal : Pekanbaru,Riau
• Waifu : Lebih Suka Loli :v
`;
	let teks = "Pilih Di Bawah Kak (〃＾▽＾〃)";
	const sections = [
		{
			title: `Owner`,
			rows: [
				{ title: "Nomor", rowId: ".owner nomor" },
				{ title: "Biodata", rowId: ".owner bio" },
			],
		},
	];

	const listMessage = {
		text: teks,
		footer: null,
		title: `Pilih Di Bawah Kak`,
		buttonText: "Touch Me (≧ω≦)",
		sections,
	};

	try {
		if (/(creator|owner)/i.test(command)) {
			const count =
				args[1] && args[1].length > 0
					? Math.min(99999999, Math.max(parseInt(args[1]), 1))
					: !args[1] || args.length < 3
					? 1
					: Math.min(1, count);
			switch (type) {
				case "nomor":
					conn.reply(m.chat, teksnomor, m, {
						contextInfo: { mentionedJid: [nowner] },
					});
					break;
				case "bio":
					//conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

					conn.sendButton(
						m.chat,
						teksbio,
						wm,
						ppown,
						[
							["\nSaya Goblok", `huuu`],
							["Menu", `${usedPrefix}tesm`],
						],
						m
					);
					break;

				default:
					return await conn.sendMessage(m.chat, listMessage, m, {
						contextInfo: { mentionedJid: [m.sender] },
					});
			}
		} else if (/enchant|enchan/i.test(command)) {
			const count =
				args[2] && args[2].length > 0
					? Math.min(99999999, Math.max(parseInt(args[2]), 1))
					: !args[2] || args.length < 4
					? 1
					: Math.min(1, count);
			switch (_type) {
				case "t":
					break;
				case "":
					break;

				default:
					return conn.sendButton(
						m.chat,
						caption,
						wm,
						null,
						[`\nOwnernya Ganteng`, `huuu`],
						m
					);
			}
		}
	} catch (err) {
		m.reply("Error\n\n\n" + err.stack);
	}
};
handler.help = ["owner", "creator"];
handler.tags = ["main", "info"];
handler.command = /^(owner|creator)/i;

export default handler;
