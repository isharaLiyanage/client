import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { updateUser } from "../redux/apiCalls";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function UserInfo() {
  const location = useLocation();

  const userId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const userIn = useSelector((state) => state.user.currentUser);
  let user;
  if (userIn._id === userId) {
    user = userIn;
  }

  const put_name = useRef(null);
  const put_fullName = useRef();
  const put_email = useRef();
  const put_address = useRef();
  const put_dateOfBirth = useRef();
  const put_phone = useRef();

  const [file, setFile] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    let name;
    if (put_name.current.value) {
      console.log(put_name);
      name = put_name.current.value;
    } else {
      name = user.username;
    }
    let fullName;
    if (put_fullName.current.value) {
      fullName = put_fullName.current.value;
    } else {
      fullName = user.fullName;
    }

    let email;
    if (put_email.current.value) {
      email = put_email.current.value;
    } else {
      email = user.email;
    }
    let address;
    if (put_address.current.value) {
      address = put_address.current.value;
    } else {
      address = user.address;
    }

    let phone;
    if (put_phone.current.value) {
      phone = put_phone.current.value;
    } else {
      phone = user.phone;
    }

    // let dateOfBirth;
    // if (put_dateOfBirth.current.value) {
    //   dateOfBirth = put_dateOfBirth.current.value;
    // } else {
    //   dateOfBirth = user.dateOfBirth;
    // }

    const putData = {
      username: name,
      fullName: fullName,
      email: email,
      // dateOfBirth: dateOfBirth,
      phone: phone,
      address: address,
    };
    if (file) {
      // for image
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const user = { ...putData, img: downloadURL };
            updateUser(userId, user, dispatch);
            console.log(user);
          });
        }
      );
    } else {
      const user = { ...putData };
      updateUser(userId, user, dispatch);
      console.log(user);
    }
  };

  return (
    <>
      <NavBar />
      <Row>
        <Col sm={12}>
          {" "}
          <div className="userTitleContainer">
            <h1 className="h1">Edit User</h1>
          </div>
        </Col>
        <Col md={6}>
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt={user.username}
                className="userShowImg"
              />
              <div className=" mt-3">
                <h5 className="h3 text-black">{user.username}</h5>
                <h5 className="h3 text-black-50">Software Engineer</h5>
              </div>
            </div>
            <div className="mt-5">
              <span className="h4 text-black mt-5">Account Details</span>
              <div className=" ms-2 mt-2">
                <PermIdentity className="userShowIcon" />
                <span className=" text-black-50 m-2 ">annabeck99</span>
              </div>
              <div className="ms-2 mt-2">
                <CalendarToday className="userShowIcon" />
                <span className=" text-black-50 m-2">10.12.1999</span>
              </div>
              <span className="h4 text-black mt-5">Contact Details</span>
              <div className="ms-2 mt-2">
                <PhoneAndroid className="userShowIcon" />
                <span className=" text-black-50 m-2">+1 123 456 67</span>
              </div>
              <div className="ms-2 mt-2">
                <MailOutline className="userShowIcon" />
                <span className=" text-black-50 m-2">{user.email}</span>
              </div>
              <div className="ms-2 mt-2">
                <LocationSearching className="userShowIcon" />
                <span className=" text-black-50 m-2">New York | USA</span>
              </div>
            </div>
          </div>
        </Col>
        <Col className=" col-md-6 mb-4">
          <span className=" text-black-50">Edit</span>
          <form>
            <div>
              <div className=" d-flex justify-content-between">
                <label>Username :</label>
                <Form.Floating>
                  <FormControl
                    type="text"
                    className=""
                    placeholder={user.username}
                    aria-label="user "
                    ref={put_name}
                  ></FormControl>
                  <label htmlFor="floatingInput">{user.username}</label>
                </Form.Floating>
              </div>

              <div className=" d-flex justify-content-between">
                <label>Full name :</label>
                <Form.Floating>
                  <FormControl
                    type="text"
                    placeholder={user.fullName}
                    className="mt-1"
                    aria-label={"Full Name"}
                    ref={put_fullName}
                  ></FormControl>
                  <label htmlFor="floatingInput">{user.fullName}</label>
                </Form.Floating>
              </div>

              <div className=" d-flex justify-content-between">
                <label>Email :</label>
                <Form.Floating>
                  <FormControl
                    type="email"
                    className="mt-1"
                    placeholder={user.email}
                    aria-label="user email"
                    ref={put_email}
                  ></FormControl>
                  <label htmlFor="floatingInput">{user.email}</label>
                </Form.Floating>
              </div>

              <div className=" d-flex justify-content-between">
                <label>Phone :</label>
                <Form.Floating>
                  <FormControl
                    type="number"
                    className="mt-1"
                    aria-label="user "
                    placeholder={user.phone}
                    ref={put_phone}
                  ></FormControl>
                  <label htmlFor="floatingInput">Phone</label>
                </Form.Floating>
              </div>

              <div className=" d-flex justify-content-between">
                <label>Address :</label>
                <Form.Floating>
                  <FormControl
                    type="text"
                    className="mt-1"
                    aria-label="user "
                    placeholder={user.address}
                    ref={put_address}
                  ></FormControl>
                  <label htmlFor="floatingInput">{user.address}</label>
                </Form.Floating>
              </div>
            </div>
            <div className=" mt-5 float-end">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    user.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                Update
              </button>
            </div>
          </form>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
