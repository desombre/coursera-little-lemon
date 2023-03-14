import "../../App.css";

function Book() {
  return (
    <>
    <h1>Book now!</h1>
    <form action="submit-form.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required />

      <label for="date">Date:</label>
      <input type="date" id="date" name="date" required />

      <label for="time">Time:</label>
      <input type="time" id="time" name="time" required />

      <label for="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        required
      />

      <label for="special-requests">Special Requests:</label>
      <textarea id="special-requests" name="special-requests"></textarea>

      <button type="submit">Book a Table</button>
    </form>
    </>
  );
}

export default Book;
