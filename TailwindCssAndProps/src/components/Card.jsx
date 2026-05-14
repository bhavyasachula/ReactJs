

function BasicExample(props) {
  console.log(props)
  // recieved the userrname
  return (
   <div className="bg-red-200">{props}</div>
  );
}

export default BasicExample;