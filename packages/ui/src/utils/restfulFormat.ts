const restfulFormat = (uri: string, replacements?: Record<string, string>) => {
  if (!replacements) {
    return uri;
  }

  let result = uri;
  const replacementKVs = Object.entries(replacements);
  for (const [key, value] of replacementKVs) {
    result = result.replace(new RegExp("\\{" + key + "\\}", "g"), value);
  }

  return result;
};

export { restfulFormat };
