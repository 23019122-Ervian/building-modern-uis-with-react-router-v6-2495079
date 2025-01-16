export default function RegisterInterest() {
  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>Please register the course you are interested!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}