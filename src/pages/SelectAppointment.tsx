import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { bookAppointment, cancelAppointment } from "../store/appointmentSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const slotIndex = parseInt(searchParams.get("slot") || "-1");

  const appointment = useSelector((state: RootState) => state.appointments[slotIndex]);

  const [firstName, setFirstName] = useState(appointment?.user?.firstName || "");
  const [lastName, setLastName] = useState(appointment?.user?.lastName || "");
  const [phone, setPhone] = useState(appointment?.user?.phone || "");
  const [isEditing, setIsEditing] = useState(appointment?.booked || false);

  useEffect(() => {
    if (appointment?.booked) {
      setIsEditing(true);
    }
  }, [appointment]);

  const handleSave = () => {
    dispatch(bookAppointment({ index: slotIndex, user: { firstName, lastName, phone } }));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleDelete = () => {
    dispatch(cancelAppointment(slotIndex));
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto my-24">
      <h1 className="text-xl font-bold mb-4">{isEditing ? "Edit Appointment" : "Enter Details"}</h1>
      <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mb-2" />
      <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mb-2" />
      <Input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-2" />
      <div className="flex space-x-2">
        <Button onClick={handleSave} className="w-full">{isEditing ? "Update" : "Save"}</Button>
        <Button onClick={handleCancel} variant="secondary" className="w-full">Cancel</Button>
        {isEditing && <Button onClick={handleDelete} variant="destructive" className="w-full">Delete</Button>}
      </div>
    </div>
  );
}
