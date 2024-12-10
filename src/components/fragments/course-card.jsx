import { formatCurrency } from "@/config";
import StarRating from "../ui/star-rating";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

function CourseCard({ course, onClickChange }) {
  return (
    <Card className="flex flex-col justify-between w-full max-w-md cursor-pointer ">
      <div
        className="h-44 relative "
        onClick={() => onClickChange(course.courseId)}
      >
        {course.thumbnails?.[0]?.url && (
          <div className="relative  ">
            <img
              src={course.thumbnails[0].url}
              alt={`Thumbnail for ${course.courseName}`}
              className="w-full h-44 object-cover rounded-t-xl "
            />
          </div>
        )}
        <div className="flex gap-2 absolute top-2 left-2">
          {course?.isSupportPrakerja > 0 ? (
            <Badge className={" bg-secondary  rounded px-2 py-1 text-sm"}>
              Prakerja
            </Badge>
          ) : null}
          {course?.isBnspSupport > 0 ? (
            <Badge className={" bg-success rounded px-2 py-1 text-sm"}>
              BNSP
            </Badge>
          ) : null}
        </div>
      </div>
      <CardContent className="h-36">
        <CardTitle className="text-medium font-semibold mt-2">
          {course.courseName}
        </CardTitle>
        <div className="flex gap-2 w-full pt-2">
          <div className="relative">
            <img
              className="rounded-full object-cover w-5"
              src={course?.partner?.partnerLogo?.thumbnail}
              alt=""
            />
          </div>
          <span className="text-slate-600 text-sm ">
            {course.partner.partnerName}
          </span>
        </div>
        {course?.reviews?.rating > 0 ? (
          <StarRating
            rating={course?.reviews?.rating}
            total={course?.reviews?.total}
          />
        ) : null}
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex gap-2 text-sm font-semibold">
          <span className="line-through text-slate-500">
            {formatCurrency(course.basicPrice)}
          </span>
          {course.label != null ? (
            <span className="text-red-500 bg-red-100 px-1">{course.label}</span>
          ) : null}
        </div>
        <div className="text-lg font-bold text-primary">
          {course.finalPrice > 0 ? (
            <span>{formatCurrency(course?.finalPrice)}</span>
          ) : (
            <span>Gratis</span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
