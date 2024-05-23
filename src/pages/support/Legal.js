import React from "react";
import { Link, useNavigate } from "react-router-dom";

import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Legal() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div>
      <NavBar />

      <div>
        <Link onClick={handleGoBack}>
          <button className=" text-dark-green text-2xl font-semibold mt-5 ml-10 underline">
            Back
          </button>
        </Link>
      </div>

      <div className="flex justify-center text-semibold text-3xl py-5">
        <h1>Legal</h1>
      </div>
      <div>
        <h2 className="flex justify-center text-semibold text-xl py-10">
          Our Legal Policies
        </h2>
        <div className="px-8 py-12 flex justify-center">
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            <br />
            <br />
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
            <br />
            <br />
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
        </div>
      </div>

      <div className="space-x-12 drop-shadow-xl text-center pb-12">
        <Link onClick={handleGoBack}>
          <button className="bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto">
            Return to Account Settings
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Legal;
