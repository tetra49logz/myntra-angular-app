/** Validations */
function validate() {
  if (document.signupForm.emailId.value == "") {
    alert("Please enter your email Id");
    document.signupForm.emailId.focus();
    return false;
  }

  if (document.signupForm.password.value == "") {
    alert("Please enter your password");
    document.signupForm.password.focus();
    return false;
  }

  if (
    document.signupForm.mobile.value == "" ||
    isNan(document.signupForm.mobile.value) ||
    document.signupForm.mobile.value.length != 10
  ) {
    alert("Please enter your 10 digit mobile number");
    document.signupForm.mobile.focus();
    return false;
  }

  return true;
}

var store = function() {
  localStorage.clear();
  localStorage.setItem("emailId", document.signupForm.emailId.value);
  localStorage.setItem("password", document.signupForm.password.value);
  localStorage.setItem("mobile", document.signupForm.mobile.value);
  localStorage.setItem("gender", document.signupForm.gender.value);
};

const tableValues = document.querySelector("#tableData");
tableValues.innerHTML = `<table>
  <tr>
    <th>keys</th>
    <th>values</th>
  </tr>
  <tr>
    <td>
      Email
        </td>
    <td>
      ${localStorage.getItem("emailId")}
    </td>
  </tr>
  <tr>
    <td>
      Password
        </td>
    <td>
${localStorage.getItem("password")}
    </td>
  </tr>
  <tr>
    <td>
      Mobile
        </td>
    <td>
${localStorage.getItem("mobile")}
    </td>
  </tr>
  <tr>
    <td>
      Gender
        </td>
    <td>
${localStorage.getItem("gender")}
    </td>
  </tr>
</table>`;
