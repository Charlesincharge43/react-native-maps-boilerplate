
export const handleGoogleMapsAPIResponse = (res) => {
  if (res.data.error_message) {
    throw new Error(res.data.error_message);
  }
  return res;
}