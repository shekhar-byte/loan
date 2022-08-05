import { useForm ,  useFormContext , Controller} from "react-hook-form"

const Personaldetails = () => {
  const {control} = useFormContext()
  return(
    <>

      <div class="ui raised very padded text container segment form">

    <div class="field">
      <label>First Name</label>
      <Controller
         control={control}
         name="firstName"
          render={({ field }) => (
            <input type="text" required   placeholder="First Name" {...field}/>
          )}
      />

    </div>
    <div class="field">
      <label>Last Name</label>
      <Controller
         control={control}
         name="lastName"
          render={({ field }) => (
              <input type="text" required  placeholder="Last Name" {...field} />
          )}
      />
    </div>
    <div class="two fields">
    <div class="field">
        <label>Age</label>
        <div class="ui right labeled input">

        <Controller
           control={control}
           name="age"
            render={({ field }) => (
                <input type="number" required   placeholder="Age" {...field} />
            )}
          />
          <div class="ui basic label">
               Years
          </div>
          </div>
    </div>
      <div class="field">
          <label>Occupation</label>
          <Controller
             control={control}
             name="occupation"
              render={({ field }) => (
                    <input type="text" name="occupation" required  placeholder="Occupation" {...field} />
              )}
            />

      </div>
    </div>

    <div class="field">
      <label>Father's Name</label>
      <Controller
         control={control}
         name="fatherName"
          render={({ field }) => (
                <input type="text" required  placeholder="Father's Name" {...field} />
          )}
        />

    </div>

    <div class="field">
      <label>Mother's Name</label>
      <Controller
         control={control}
         name="motherName"
          render={({ field }) => (
                <input type="text" required  placeholder="Mother's Name" {...field} />
          )}
        />

    </div>
    <div class="field">
      <label>E-mail <i class="envelope icon"></i></label>
      <Controller
         control={control}
         name="email"
          render={({ field }) => (
                <input type="email" required  placeholder="E-mail" {...field} />
          )}
        />


    </div>
    <div class="field ">
      <label>Mobile Number <i class="phone icon"></i></label>

      <Controller
         control={control}
         name="Number"
          render={({ field }) => (
                <input type="Number" required id="number" placeholder="Mobile Number" {...field} />
          )}
        />


    </div>
    <div class="field">
      <label>Address <i class="map marker icon"></i></label>
      <Controller
         control={control}
         name="address"
          render={({ field }) => (
                <input  type="text" required  placeholder="Address" {...field} />
          )}
        />


    </div>
      <div class="three fields">
      <div class="field">
          <label>Pincode</label>
          <Controller
             control={control}
             name="pincode"
              render={({ field }) => (
                    <input  type="number" required  placeholder="Pincode" {...field} />
              )}
            />

      </div>
        <div class="field">
            <label>State</label>
            <Controller
               control={control}
               name="state"
                render={({ field }) => (
                      <input  type="text"  required placeholder="State" {...field} />
                )}
              />

        </div>
        <div class="field">
            <label>Country</label>
            <Controller
               control={control}
               name="country"
                render={({ field }) => (
                      <input  type="text" required placeholder="Country" {...field} />
                )}
              />

        </div>
      </div>




  </div>
</>
  )
}

export default Personaldetails
