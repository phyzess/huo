const readFile = async (file: File): Promise<string> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      if (result) {
        return resolve(result as string);
      }
    });

    reader.addEventListener('error', (err: ProgressEvent<FileReader>) => {
      return reject(err.target?.error);
    });

    reader.readAsDataURL(file);
  });
};

export { readFile };
