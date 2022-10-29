
export const main = () => {
	try {
		console.log('Hello World');
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.log(error);
		}
	}
};

main();
