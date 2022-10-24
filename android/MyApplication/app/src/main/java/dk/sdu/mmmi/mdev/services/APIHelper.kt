package dk.sdu.mmmi.mdev.services

import android.content.Context
import android.util.Log
import android.widget.Toast
import dk.sdu.mmmi.mdev.R
import dk.sdu.mmmi.mdev.models.MovieModel
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object APIHelper {
    private var apiFetch: APIFetch? = null

    fun getInstance(context: Context): APIHelper {
        if (apiFetch == null) {
            val url = context.getString(R.string.api_url)
            apiFetch = Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(url)
                .build()
                .create(APIFetch::class.java)
        }
        return this;
    }

    fun getAPIFetch(): APIFetch? {
        return apiFetch
    }

    fun resolve(response: Call<APIResponse>?, onSuccess: SuccessCallBack, onFailure: FailureCallBack) {
        response?.enqueue(object : Callback<APIResponse?> {
            override fun onResponse(call: Call<APIResponse?>, response: Response<APIResponse?>) {
                val results: List<MovieModel> = response.body()?.results as List<MovieModel>
                if (results.isNotEmpty()) {
                    onSuccess.call(results)
                } else {
                    onFailure.call()
                }
            }

            override fun onFailure(call: Call<APIResponse?>, t: Throwable) {
                Log.e("Fetch","Failure",t)
            }
        })
    }
}