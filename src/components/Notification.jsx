import { notification1 } from "../assets/index.js";
import { notificationImages } from "../utils/constants/const";

export default function Notification({ className, title }) {
    return (
        <article className={`${className || ''} flex item-center p-4 bg-n-9/40 rounded-2xl backdrop-blur border border-n-1/10 gap-5`}>
            <img src={notification1} alt={notification1} height={62} width={62} className="rounded-xl" />
            <section className="flex-1">
                <h6 className="mb-1 text-base font-semibold">{title}</h6>

                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((img, i) => (
                            <li key={i} className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                                <img className="w-full" height={20} width={20} src={img} alt={img} />
                            </li>
                        ))}
                    </ul>
                    <p className="body-2 text-n-13">1m ago</p>
                </div>

            </section>
        </article>
    )
}