import UserCard from "./components/userCard.jsx";
import "./App.css";
import userPic from "./assets/image.png";

function App() {
  return (
    <div className="container">
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quasi."
        image={userPic}
        style={{ border: "2px solid black", padding: "10px" }}
        
      />
      <UserCard
        name="Jane Smith"
        email="jane.smith@example.com"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quasi."
        image={userPic}
        style={{ border: "2px solid black", padding: "10px" }}
      />
      <UserCard
        name="Bob Johnson"
        email="bob.johnson@example.com"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quasi."
        image={userPic}
        style={{ border: "2px solid black", padding: "10px" }}
      />
    </div>
  );
}

export default App;
