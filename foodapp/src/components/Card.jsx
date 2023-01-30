import React from 'react'

export default function Card() {
  return (
    
        <div>
        <div className="card mt-3" style={{width: "18rem", maxHeight: "360px"}}>
          <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=2000" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is about Food.
            </p>
            {/* <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link> */}
            <div className="container w-100">
                <select className="m-2 h-100 bg-success rounded">
                    {Array.from(Array(6), (e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        );
                    })};
                </select>
                <select className="m-2 h-100 bg-success rounded">
                    <option value="Half">Half</option>
                    <option value="Full">Full</option>
                </select>

                <div className="d-inline h-100 fs-5">
                  Total Price
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
