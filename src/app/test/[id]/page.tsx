export default async function TestPage() {
  // wait for 5 seconds

  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>Test Page WITH DYNAMIC URL</h1>
    </div>
  );
}
