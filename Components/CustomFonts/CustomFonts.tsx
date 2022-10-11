import { Global } from "@mantine/core";
export default function CustomFonts() {
	return (
		<Global
			styles={[
				{
					// "@font-face": {
					// 	fontFamily: "Satoshi-Variable",
					// 	src: `url('${font}') format("ttf")`,
					// 	fontWeight: 700,
					// 	fontStyle: "normal",
					// },
					// `url('${font}') format("ttf")` format('truetype')`,
					// 	 font-weight: 300 900,
					// 	 font-style: normal,
				},
			]}
		/>
	);
}
