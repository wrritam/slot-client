import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const appointments = useSelector((state: RootState) => state.appointments);
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Appointment Slots</h1>
      <div className="space-y-2">
        {appointments.map((slot, index) => (
          <Card key={index} className={slot.booked ? "bg-red-500 text-white" : "bg-gray-200"}>
            <CardContent className="p-4">
              <Button variant="ghost" className="w-full" onClick={() => navigate(`/details?slot=${index}`)}>
                {slot.time}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
