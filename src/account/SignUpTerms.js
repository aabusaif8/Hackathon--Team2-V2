import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignUpTerms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleProceed = () => {
    if (isChecked) {
      navigate("");
    } else {
      alert("Please agree to the Terms and Conditions");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <button
          onClick={handleGoBack}
          className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0"
        >
          Go Back
        </button>
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-center font-semibold text-4xl mb-8">
            First, Please Read and agree to our Terms and Conditions.
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="termsCheckbox" className="text-sm text-gray-500">
              I have read and agreed to the Terms and Conditions
            </label>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleGoBack}
              className="w-1/2 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold text-xl mr-2"
            >
              Go Back
            </button>
            <button
              onClick={handleProceed}
              disabled={!isChecked}
              className={`w-1/2 py-2 ${
                isChecked
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              } rounded-lg font-semibold text-xl ml-2`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTerms;
