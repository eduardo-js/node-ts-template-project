
export const main = () => {
	try {
		console.log('Hello Pepega');
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.log(error);
		}
	}
};

main();
