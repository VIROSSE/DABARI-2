import React, { useState } from "react";
import { cn } from "../../../../../../../lib/utils";
import FileInput from "@/app/components/file-input";
import { countries } from "../../../../../../../utils/CONSTANTS";

interface Props {
  register: any;
  errors: any;
  control: any;
  userInfo: any;
}

export default function CreatePersonalDetailsForm({
  register,
  errors,
  control,
  userInfo,
}: Props) {
  const [residencyType, setResidencyType] = useState("");

  return (
    <div className="grid space-y-10">
      <div className="grid text-[#455A64]">
        <p className="font-bold text-lg">Personal details</p>
        <p className=" text-base">Personal details of investor</p>
      </div>

      <div className="flex items-start gap-10 px-2">
        <FileInput control={control} label="ID" name="id_scan" />
        <FileInput control={control} label="Passport " name="passport_scan" />
      </div>

      <div className="flex items-center gap-10 px-2">
        <div className="gap-3 flex text-sm">
          <input
            type="radio"
            name="residency"
            value="resident"
            defaultChecked={userInfo?.residency === "resident"}
            className="h-5 w-5"
            onClick={() => setResidencyType("resident")}
            {...register("residency", { required: true })}
          />
          <label> Resident </label>
        </div>

        <div className="gap-3 flex text-sm">
          <input
            type="radio"
            name="residency"
            value="non_resident"
            defaultChecked={userInfo?.residency === "non_resident"}
            className="h-5 w-5"
            onClick={() => setResidencyType("non_resident")}
            {...register("residency", { required: true })}
          />
          <label> Non-Resident </label>
        </div>
      </div>

      <div className="flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">
              Nationality (please specify)
            </p>
            <select
              name="nationality"
              defaultValue={userInfo?.nationality}
              defaultChecked={userInfo?.nationality}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.nationality && "border-red-400 border-2"
              )}
              {...register("nationality", { required: true })}
            >
              {countries.map((item, index) => (
                <option value={item?.name} key={index}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">
              Place of birth (city and country)
            </p>
            <input
              type="text"
              defaultValue={userInfo?.place_of_birth}
              placeholder="Enter your place of birth "
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.place_of_birth && "border-red-400 border-2"
              )}
              {...register("place_of_birth", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">EIDA No </p>
            <input
              type="text"
              defaultValue={userInfo?.eida_number}
              placeholder="Enter your EIDA no"
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.eida_number && "border-red-400 border-2"
              )}
              {...register("eida_number", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">No passport</p>
            <input
              type="text"
              placeholder="Enter your no passport"
              defaultValue={userInfo?.passport_number}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.passport_number && "border-red-400 border-2"
              )}
              {...register("passport_number", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Date of birth </p>
            <input
              type="date"
              defaultValue={userInfo?.date_of_birth}
              placeholder="Enter your date of birth "
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.date_of_birth && "border-red-400 border-2"
              )}
              {...register("date_of_birth", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Mobile Number</p>
            <input
              type="text"
              placeholder="Enter your mobile number"
              defaultValue={userInfo?.mobile_number}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.mobile_number && "border-red-400 border-2"
              )}
              {...register("mobile_number", { required: true })}
            />
          </div>
        </div>
      </div>

      <div className="grid  text-[#455A64]">
        <p className="font-bold text-lg">Bank details </p>
        <p className=" text-base">
          Please give details of any existing account{" "}
        </p>
      </div>

      <div className="flex md:gap-5 lg:gap-16 md:flex-row flex-col items-start px-2">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Bank name</p>
            <input
              type="text"
              placeholder="Enter your bank name"
              defaultValue={userInfo?.bank_name}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.bank_name && "border-red-400 border-2"
              )}
              {...register("bank_name", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <div className="grid">
              <p className=" text-sm  font-semibold">
                Bank No / Account No/ Credit card /
              </p>
              <p className=" text-sm  font-semibold">Balance / Deposit</p>
            </div>
            <input
              type="text"
              placeholder="Enter your bank no"
              defaultValue={userInfo?.bank_number}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.bank_number && "border-red-400 border-2"
              )}
              {...register("bank_number", { required: true })}
            />
          </div>

          <div className="flex   flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Nature of Employment :</p>

            <div className="flex gap-10">
              <div className="gap-3 flex text-sm">
                <input
                  type="radio"
                  name="nature_of_employment"
                  value="salary"
                  defaultValue={userInfo?.nature_of_employment}
                  defaultChecked={userInfo?.nature_of_employment === "salary"}
                  className="h-5 w-5"
                  {...register("nature_of_employment", { required: true })}
                />
                <label> Salary </label>
              </div>

              <div className="gap-3 flex text-sm">
                <input
                  type="radio"
                  name="nature_of_employment"
                  value="self_employed"
                  defaultValue={userInfo?.nature_of_employment}
                  defaultChecked={
                    userInfo?.nature_of_employment === "self_employed"
                  }
                  className="h-5 w-5"
                  {...register("nature_of_employment", { required: true })}
                />
                <label> Self-employed </label>
              </div>
              <div className="gap-3 flex text-sm">
                <input
                  type="radio"
                  name="nature_of_employment"
                  value="other"
                  defaultValue={userInfo?.nature_of_employment}
                  defaultChecked={userInfo?.nature_of_employment === "other"}
                  className="h-5 w-5"
                  {...register("nature_of_employment", { required: true })}
                />
                <label> Other </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Designation</p>
            <input
              type="text"
              placeholder="Enter your designation"
              defaultValue={userInfo?.designation}
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.designation && "border-red-400 border-2"
              )}
              {...register("designation", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex items-center gap-10 mt-10 mb-7">
            <div className="gap-3 flex text-sm">
              <input
                type="radio"
                name="money_source"
                value="salary"
                defaultValue={userInfo?.money_source}
                defaultChecked={userInfo?.money_source === "salary"}
                className="h-5 w-5"
                {...register("money_source", { required: true })}
              />
              <label> Salary </label>
            </div>

            <div className="gap-3 flex text-sm">
              <input
                type="radio"
                name="money_source"
                value="pfa"
                defaultValue={userInfo?.money_source}
                defaultChecked={userInfo?.money_source === "pfa"}
                className="h-5 w-5"
                {...register("money_source", { required: true })}
              />
              <label> PFA </label>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Name of employer</p>
            <input
              type="text"
              defaultValue={userInfo?.name_of_employer}
              placeholder="Enter your name of employer"
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.name_of_employer && "border-red-400 border-2"
              )}
              {...register("name_of_employer", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-3 py-2 text-[#37474F]">
            <p className=" text-sm  font-semibold">Department</p>
            <input
              type="text"
              defaultValue={userInfo?.department}
              placeholder="Enter your department"
              className={cn(
                "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                errors.department && "border-red-400 border-2"
              )}
              {...register("department", { required: true })}
            />
          </div>
        </div>
      </div>

      <div className="flex md:gap-5 lg:gap-16 md:flex-row flex-col">
        {residencyType === "resident" && (
          <div className="flex flex-col space-y-2">
            <div className="grid  text-[#455A64]">
              <p className="font-bold text-lg">UAE Resident</p>
            </div>
            <div className="flex flex-col space-x-2 px-2">
              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">Building Name</p>
                <input
                  type="text"
                  placeholder="Enter your building name :"
                  defaultValue={userInfo?.address?.uae_resident_building_name}
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.uae_resident_building_name &&
                      "border-red-400 border-2"
                  )}
                  {...register("uae_resident_building_name", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">Flat / Villa No</p>
                <input
                  type="text"
                  placeholder="Enter your flat / villa no "
                  defaultValue={userInfo?.address?.uae_resident_flat_number}
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.uae_resident_flat_number && "border-red-400 border-2"
                  )}
                  {...register("uae_resident_flat_number", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">City </p>
                <input
                  type="text"
                  placeholder="Enter your city"
                  defaultValue={userInfo?.address?.uae_resident_city}
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.uae_resident_city && "border-red-400 border-2"
                  )}
                  {...register("uae_resident_city", { required: true })}
                />
              </div>
            </div>
          </div>
        )}
        {residencyType === "non_resident" && (
          <div className="flex flex-col space-y-2">
            <div className="grid  text-[#455A64]">
              <p className="font-bold text-lg">Non UAE Resident</p>
            </div>

            <div className="flex flex-col space-y-2 px-2">
              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">Address Line</p>
                <input
                  type="text"
                  placeholder="Enter your address line"
                  defaultValue={
                    userInfo?.address?.non_uae_resident_address_line
                  }
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.non_uae_resident_address_line &&
                      "border-red-400 border-2"
                  )}
                  {...register("non_uae_resident_address_line", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">Country </p>
                <input
                  type="text"
                  placeholder="Enter your country "
                  defaultValue={
                    userInfo?.address?.non_uae_resident_address_country
                  }
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.non_uae_resident_address_country &&
                      "border-red-400 border-2"
                  )}
                  {...register("non_uae_resident_address_country", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">City</p>
                <input
                  type="text"
                  placeholder="Enter your city"
                  defaultValue={
                    userInfo?.address?.non_uae_resident_address_city
                  }
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.non_uae_resident_address_city &&
                      "border-red-400 border-2"
                  )}
                  {...register("non_uae_resident_address_city", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex flex-col gap-3 py-2 text-[#37474F]">
                <p className=" text-sm  font-semibold">PO / Box</p>
                <input
                  type="text"
                  placeholder="Enter your PO / Box"
                  defaultValue={
                    userInfo?.address?.non_uae_resident_address_postbox
                  }
                  className={cn(
                    "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black",
                    errors.non_uae_resident_address_postbox &&
                      "border-red-400 border-2"
                  )}
                  {...register("non_uae_resident_address_postbox", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
