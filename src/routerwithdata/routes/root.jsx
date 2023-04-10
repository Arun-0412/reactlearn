// this page contains side bar for the main page

import { Outlet , useLoaderData, Form,   redirect, NavLink, useNavigation,} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

// export async function loader() {
//   const contacts = await getContacts(); without search option
//   return { contacts };
// }

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q"); // with search option
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
          <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
          </div>
          <nav>

          {/* for dummy data load start */}

            {/* <ul>
              <li> */}
              {/* this is client side routing for page redirection , this will work as a nester route using children and the outlet */}
              {/* <Link to={`contacts/1`}>Your Name</Link> */}

                {/* this is a basic method for redirection , it will work on a seperate path given from the router path in the main.js */}
                {/* <a href={`/contacts/1`}>Your Name</a> */}
              {/* </li>
              <li> */}
               {/* this is client side routing for page redirection, this will work as a nester route using children and the outlet  */}
              {/* <Link to={`contacts/2`}>Your Friend</Link> */}

                 {/* this is a basic method for redirection ,  it will work on a seperate path given from the router path in the main.js  */}
                {/* <a href={`/contacts/2`}>Your Friend</a> */}
              {/* </li>
            </ul> */}

   {/* for dummy data load end */}

   {/* for dynamic data load start */}

            {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>

                {/* static nav link start */}

                  {/* <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link> */}

                   {/* static nav link end */}

                    {/* dynamic nav link start */}

                      <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                   {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </NavLink>

                    {/* dynamic nav link end */}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}

          </nav>

   {/* for dynamic data load end */}


        </div>
        <div id="detail"   className={
          navigation.state === "loading" ? "loading" : ""
        }>
        {/* this is used for nested route */}
        <Outlet /> 
      </div>
      </>
    );
  }