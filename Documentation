**Section I: Data Documentation**

Json Schema:

var userSchema = mongoose.Schema({

    local            : {

        email        : String,

        password     : String,

        contacts     : [{

          fullname   : String,

          email      : String,

          address    : String

        }]

    },

    facebook         : {

        id           : String,

        token        : String,

        email        : String,

        name         : String

    },

    twitter          : {

        id           : String,

        token        : String,

        displayName  : String,

        username     : String

    },

    google           : {

        id           : String,

        token        : String,

        email        : String,

        name         : String

    }

});

**                               **

**Section II: Test Plan and Execution**

1.Form Validation



| _PageNmae_ | _FormId_ | _FieldId_ | _ExpectedValues_ | _TestId_ | _TestValue_ | _Pass/Fail_ |
| --- | --- | --- | --- | --- | --- | --- |
| _profile.ejs_ | _searchForm_ | _search_ | _String_ | _1_ | _&quot;Satoe&quot;_ | _Pass_  |
| _profile.ejs_ | _myform_ | _upfile_ | _imageFile(.JPG)_ | _1_ | _image file_ | _Pass_ |
| _login.ejs_ | _login_ | _email_ | _String_ | _1_ | _&quot;maggie@gmail.com&quot;_ | _Pass_ |
| _login.ejs_ | _login_ | _password_ | _String_ | _2_ | _&quot;88888&quot;_ | _Pass_ |
| _signup.ejs_ | _signup_ | _email_ | _String_ | _1_ | _&quot;maggie@gmail.com&quot;_ | _Pass_ |
| _signup.ejs_ | _signup_ | _password_ | _String_ | _2_ | _&quot;22222&quot;_ | _Fail_ |
| _signup.ejs_ | _signup_ | _password_ | _String_ | _3_ | _&quot;88888&quot;_ | _Pass_ |
| _storename.ejs_ | _contactinfo_ | _Firstname __Lastname__ Phone # __Address_ | _String_ | _1_ | _Perry__ Donham __617-407-__ 2307__PSY228A_ | _Pass_ |



2.Data Validation

| Table | Field | Type | R/W | Data Source | Constraints | TestID | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- | --- |
| profile.ejs | user.name | String | R | user.email | String &lt; 100 | 1 | Pass |



3.UI Validation

| Page Name | UI Element | Expect Function | TestId | Pass/Fail |
| --- | --- | --- | --- | --- |
| index.ejs | login button | /login get | 1 | Pass |
| index.ejs | Sign Up button | /signup get | 2 | Pass |
| login.ejs | submit | /login post | 1 | Pass |
| login.ejs | Need an account? | /signup get | 2 | Pass |
| login.ejs | or go | / get (index.ejs) | 3 | pass |
| signup.ejs | submit | /signup post | 1 | Pass |
| signup.ejs | Already have an account? | /login get | 2 | Pass |
| signup.ejs | or go | / get | 3 | Pass |
| profile.ejs | Store Contacts Manually button | /storename post | 1 | Pass |
| profile.ejs | Search for Contacts | /get | 2 | Pass |
| profile.ejs | Choose File button | Open finder | 1 | Pass |
| profile.ejs | Upload button | post to API | 1 | Pass |

4.Remediation

| BugId | TestId | Description | Severity | Assigned |
| --- | --- | --- | --- | --- |
| 1 | 2 | Cannot signup the same username | 2 | team all |
