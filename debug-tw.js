try {
  const twPath = require.resolve('tailwindcss');
  console.log('tailwindcss found at:', twPath);
} catch (e) {
  console.error('tailwindcss NOT found');
  console.error(e.message);
}
