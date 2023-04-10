import React from "react";
// import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./index.css";
import Root , { loader as rootLoader , action as rootAction,} from "./routes/root";
import ErrorPage from "./error-page";
import Contact , { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction, } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";



// route method 1 start 

// const router = createBrowserRouter([
//   {
//     path: "/",

// // dummy data for the page

//     // element: <div className="hello_world">Hello world!</div>,

// // when project load this root page will be loaded initialy from the routes folder root.jsx file content

//     element:<Root />,
//     errorElement:<ErrorPage/>, // it's show the error page for the project while no route is defined from this location
//     // ErrorPage is an seperate page contains the ui to display when error occurs
//     loader: rootLoader,
//     action: rootAction,
//     children: [ // children is used for show the content in the same page like nested root
//         { index: true, 
//           element: <Index /> 
//         },
//         {
//           path: "contacts/:contactId",
//           element: <Contact />,
//           loader: contactLoader,
//         },
//         {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//         },
//         {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <ErrorPage />,
//         },
//       ],
//   },
// //   {
// //     path: "contacts/:contactId", // this path will open content in a new page
// //     element: <Contact />,
// //   },
// ]);

// route method 1 end


// route method 2 start 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          // action={ContactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

// route method 2 end 

function main() {
    return(
        // ReactDOM.createRoot(document.getElementById("root")).render(

        // when rendor enable the browser load this page b default for our convinience we export this page to index.js
        // So the project load normaly, on that index.js page we called this page to load. so that we got this output
        // on the main page. below example the another method to create a route paths. it will work same as other method
        //it's used for single route and call the multiple path in a single array

            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
        //   );
    );
}

export default main;
