package dk.sdu.mmmi.mdev.services

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query

interface APIFetch {
    @GET("trending/movie/week")
    fun getTrending(@Query("api_key") api_key: String): Call<APIResponse>

    @GET("search/movie")
    fun getQuery(
        @Query("api_key") api_key: String,
        @Query("query") query: String): Call<APIResponse>
}