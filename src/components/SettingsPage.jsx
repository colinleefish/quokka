import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function SettingsPage() {

    function doNothing() {
        console.log("I do nothing")
    }

    return (
        <div className="pt-4 px-6">
            <div className="py-4">
                <h1 className="text-2xl font-bold font-sans text-gray-900">Quokka Settings</h1>
                <div className="divide-y divide-solid"></div>
            </div>
            <div className="pt-8">
                <form onSubmit={doNothing()}>
                    <div className="pb-6">
                        <label for="unsplashAccessKey" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unsplash Access Key</label>
                        <input id="unsplashAccessKey" type="text" className="w-full border border-gray-300 h-8 rounded-md py-4"></input>
                    </div>

                    <div className="pb-6">
                        <label for="updateInterval" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Update Interval</label>
                        <select id="updateInterval" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled>Choose Interval</option>
                            <option value="10">10 Minutes</option>
                            <option value="30">30 Minute</option>
                            <option value="60">1 Hour</option>
                            <option value="180">3 hours</option>
                            <option value="360">6 hours</option>
                            <option value="1440">1 Day</option>
                        </select>
                    </div>

                    <div className="pb-6">


                        <label>Select Unsplash Channel</label>

                        <RadioGroup defaultValue="wallpaper">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="wallpaper" id="wallpaper" />
                                <Label htmlFor="wallpaper">Wallpaper</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Featured" id="Featured" />
                                <Label htmlFor="Featured">Featured</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="editorial" id="editorial" />
                                <Label htmlFor="editorial">Editorial</Label>
                            </div>
                        </RadioGroup>

                    </div>

                </form>
            </div >
        </div >
    )
}

export default SettingsPage