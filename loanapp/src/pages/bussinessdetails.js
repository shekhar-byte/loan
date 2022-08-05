import { useForm ,  useFormContext , Controller} from "react-hook-form"

const Bussinessdetail = () => {
  const {control} = useFormContext()
  return (
    <>
    <div class="ui raised very padded text container segment form">
    <div class="field">
      <label>Applicant's Bussiness Name</label>
      <Controller
         control={control}
         name="bussinessName"
          render={({ field }) => (
            <input type="text" required  placeholder="Bussiness Name" {...field}/>
          )}
      />

    </div>
    <div class="field">
      <label>Bussiness Address</label>
      <Controller
         control={control}
         name="bussinessAddress"
          render={({ field }) => (
            <input  type="text" required  placeholder="Bussiness Address"  {...field}/>
          )}
      />

    </div>


  <div class="two fields">
  <div class="field">
      <label>Shop No.</label>

        <Controller
           control={control}
            name="shopNo"
            render={({ field }) => (
              <input  type="text" required  placeholder="Shop Number"  {...field}/>
            )}
        />


      </div>
      <div class="field">
        <label>GST No.</label>
        <Controller
           control={control}
            name="gstNo"
            render={({ field }) => (
              <input   type="text" required placeholder="GST Number"  {...field}/>
            )}
        />


    </div>
  </div>
  <div class="field">
    <label>Bussiness Description</label>
    <Controller
       control={control}
        name="bussinessDescription"
        render={({ field }) => (
          <input  type="text"  required placeholder="Bussiness Description"  {...field}/>
        )}
    />

  </div>

  <div class="two fields">
  <div class="field">
      <label>Bussiness Phone No.</label>
      <Controller
         control={control}
        name="bussinessPhoneNumber"
          render={({ field }) => (
            <input  type="text" required  placeholder="Phone Number" {...field}/>
          )}
      />


  </div>
    <div class="field">
        <label>Bussiness E-mail ID</label>
        <Controller
           control={control}
          name="bussinessEmail"
            render={({ field }) => (
              <input   type="text" required  placeholder="Bussiness Email" {...field}/>
            )}
        />

    </div>
  </div>


</div>
</>
  )
}

export default Bussinessdetail
